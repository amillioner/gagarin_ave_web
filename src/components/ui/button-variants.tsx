import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";

// Primary Button (gradient background)
const PrimaryButton: React.FC<ButtonProps> = ({ className, ...props }) => (
  <Button
    className={cn(
      "bg-gradient-luxury hover:opacity-90 text-primary-foreground font-semibold",
      className
    )}
    {...props}
  />
);

// Full-width Primary Button
const PrimaryButtonFull: React.FC<ButtonProps> = ({ className, ...props }) => (
  <PrimaryButton className={cn("w-full", className)} {...props} />
);

// Large Primary Button
const PrimaryButtonLarge: React.FC<ButtonProps> = ({ className, ...props }) => (
  <PrimaryButton className={cn("py-6 text-lg", className)} {...props} />
);

// Full-width Large Primary Button
const PrimaryButtonFullLarge: React.FC<ButtonProps> = ({ className, ...props }) => (
  <PrimaryButtonFull className={cn("py-6 text-lg", className)} {...props} />
);

// Outline Primary Button
const OutlinePrimaryButton: React.FC<ButtonProps> = ({ className, ...props }) => (
  <Button
    variant="outline"
    className={cn(
      "border-primary text-primary hover:bg-primary hover:text-primary-foreground",
      className
    )}
    {...props}
  />
);

// Full-width Outline Primary Button
const OutlinePrimaryButtonFull: React.FC<ButtonProps> = ({ className, ...props }) => (
  <OutlinePrimaryButton className={cn("w-full", className)} {...props} />
);

// Small Outline Primary Button
const OutlinePrimaryButtonSmall: React.FC<ButtonProps> = ({ className, ...props }) => (
  <OutlinePrimaryButton size="sm" className={cn(className)} {...props} />
);

export {
  PrimaryButton,
  PrimaryButtonFull,
  PrimaryButtonLarge,
  PrimaryButtonFullLarge,
  OutlinePrimaryButton,
  OutlinePrimaryButtonFull,
  OutlinePrimaryButtonSmall,
};
