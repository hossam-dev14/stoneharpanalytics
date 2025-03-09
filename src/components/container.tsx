import { cn } from "@/utils";

export default function Container({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn("container mx-auto  max-w-6xl", className)}
      {...props}
    />
  );
}
