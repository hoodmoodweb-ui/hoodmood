import { cn } from "@/lib/utils";

type EnrollmentStepContentProps = {
  children: React.ReactNode;
  className?: string;
};

export default function EnrollmentStepContent({
  children,
  className,
}: EnrollmentStepContentProps) {
  return (
    <div
      className={cn(
        "flex w-full flex-col rounded-[24px] bg-white/2 p-4 md:p-5 xl:h-170 ",
        className,
      )}
    >
      {children}
    </div>
  );
}
