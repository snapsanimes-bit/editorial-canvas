import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Check, AlertCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
import { cn } from "@/lib/utils";

interface FormFieldProps {
  label: string;
  error?: string;
  touched?: boolean;
  children: React.ReactNode;
  optional?: boolean;
}

const FormField = ({ label, error, touched, children, optional }: FormFieldProps) => (
  <div className="space-y-2">
    <label className="mb-2 block text-sm font-medium">
      {label}
      {optional && <span className="ml-1 text-muted-foreground">(Optional)</span>}
    </label>
    {children}
    <AnimatePresence mode="wait">
      {error && touched && (
        <motion.p
          initial={{ opacity: 0, y: -10, height: 0 }}
          animate={{ opacity: 1, y: 0, height: "auto" }}
          exit={{ opacity: 0, y: -10, height: 0 }}
          transition={{ duration: 0.2 }}
          className="flex items-center gap-1.5 text-sm text-destructive"
        >
          <AlertCircle className="h-3.5 w-3.5 shrink-0" />
          {error}
        </motion.p>
      )}
    </AnimatePresence>
  </div>
);

const inputBaseStyles = cn(
  "w-full rounded-xl border bg-background px-4 py-3 text-foreground transition-all duration-200",
  "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background"
);

const getInputStyles = (hasError: boolean, isTouched: boolean, isValid: boolean) =>
  cn(
    inputBaseStyles,
    hasError && isTouched
      ? "border-destructive focus:ring-destructive/50"
      : isValid && isTouched
      ? "border-primary/50 focus:ring-primary/50"
      : "border-border focus:border-primary focus:ring-primary/50"
  );

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, isValid, dirtyFields },
    reset,
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      company: "",
      budget: "",
      message: "",
    },
  });

  const watchedFields = watch();

  const isFieldValid = (field: keyof ContactFormData) => {
    return dirtyFields[field] && !errors[field];
  };

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    reset();
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex h-full min-h-[400px] items-center justify-center rounded-3xl border border-border bg-card p-12 text-center"
      >
        <div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20"
          >
            <Check className="h-8 w-8 text-primary" />
          </motion.div>
          <h3 className="font-display text-2xl font-semibold">
            Message Sent!
          </h3>
          <p className="mt-2 text-muted-foreground">
            Thank you for reaching out. I'll get back to you within 24-48
            hours.
          </p>
          <button
            onClick={handleReset}
            className="mt-6 text-sm text-primary hover:underline"
          >
            Send another message
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <FormField
          label="Name"
          error={errors.name?.message}
          touched={touchedFields.name}
        >
          <div className="relative">
            <input
              type="text"
              {...register("name")}
              className={getInputStyles(!!errors.name, !!touchedFields.name, isFieldValid("name"))}
              placeholder="Your name"
            />
            {isFieldValid("name") && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                <Check className="h-4 w-4 text-primary" />
              </motion.div>
            )}
          </div>
        </FormField>

        <FormField
          label="Email"
          error={errors.email?.message}
          touched={touchedFields.email}
        >
          <div className="relative">
            <input
              type="email"
              {...register("email")}
              className={getInputStyles(!!errors.email, !!touchedFields.email, isFieldValid("email"))}
              placeholder="you@company.com"
            />
            {isFieldValid("email") && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                <Check className="h-4 w-4 text-primary" />
              </motion.div>
            )}
          </div>
        </FormField>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <FormField
          label="Company"
          error={errors.company?.message}
          touched={touchedFields.company}
          optional
        >
          <input
            type="text"
            {...register("company")}
            className={getInputStyles(!!errors.company, !!touchedFields.company, false)}
            placeholder="Your company"
          />
        </FormField>

        <FormField
          label="Budget Range"
          error={errors.budget?.message}
          touched={touchedFields.budget}
          optional
        >
          <select
            {...register("budget")}
            className={cn(
              getInputStyles(!!errors.budget, !!touchedFields.budget, false),
              "cursor-pointer"
            )}
          >
            <option value="">Select a range</option>
            <option value="5k-10k">$5,000 - $10,000</option>
            <option value="10k-25k">$10,000 - $25,000</option>
            <option value="25k-50k">$25,000 - $50,000</option>
            <option value="50k+">$50,000+</option>
          </select>
        </FormField>
      </div>

      <FormField
        label="Project Details"
        error={errors.message?.message}
        touched={touchedFields.message}
      >
        <div className="relative">
          <textarea
            {...register("message")}
            rows={6}
            className={cn(
              getInputStyles(!!errors.message, !!touchedFields.message, isFieldValid("message")),
              "resize-none"
            )}
            placeholder="Tell me about your project, timeline, and goals..."
          />
          <div className="mt-1.5 flex items-center justify-between text-xs text-muted-foreground">
            <span>
              {watchedFields.message?.length || 0} / 2000 characters
            </span>
            {isFieldValid("message") && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-1 text-primary"
              >
                <Check className="h-3 w-3" />
                Looks good!
              </motion.span>
            )}
          </div>
        </div>
      </FormField>

      <button
        type="submit"
        disabled={isSubmitting || !isValid}
        className={cn(
          "magnetic-btn group flex w-full items-center justify-center gap-3 rounded-xl py-4 text-base font-medium transition-all",
          isValid
            ? "bg-primary text-primary-foreground hover:shadow-glow"
            : "bg-muted text-muted-foreground cursor-not-allowed"
        )}
        data-cursor="hover"
      >
        {isSubmitting ? (
          <>
            <span className="h-5 w-5 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </>
        )}
      </button>

      {!isValid && Object.keys(dirtyFields).length > 0 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-sm text-muted-foreground"
        >
          Please fill in all required fields correctly
        </motion.p>
      )}
    </form>
  );
}
