interface SkeletonProps {
  className?: string;
}

const Skeleton = ({ className = "" }: SkeletonProps) => (
  <div
    aria-hidden="true"
    className={`animate-pulse rounded-md bg-slate-200 ${className}`}
  />
);

export const DashboardSkeleton = () => (
  <div className="grid grid-cols-2 gap-4 sm:flex sm:flex-wrap">
    {Array.from({ length: 4 }).map((_, index) => (
      <Skeleton key={index} className="h-48 w-full sm:max-w-36" />
    ))}
  </div>
);

export const BuilderSkeleton = () => (
  <div className="grid animate-pulse gap-8 lg:grid-cols-12">
    <div className="space-y-6 rounded-lg border border-gray-200 bg-white p-6 lg:col-span-5">
      <div className="flex justify-between">
        <Skeleton className="h-8 w-32" />
        <Skeleton className="h-8 w-24" />
      </div>
      <Skeleton className="h-6 w-44" />
      <Skeleton className="h-10 w-full" />
      <Skeleton className="h-10 w-full" />
      <Skeleton className="h-10 w-full" />
      <Skeleton className="h-32 w-full" />
    </div>
    <div className="lg:col-span-7">
      <Skeleton className="min-h-180 w-full" />
    </div>
  </div>
);

export const PreviewSkeleton = () => (
  <div className="mx-auto min-h-screen max-w-3xl bg-white p-8">
    <Skeleton className="mb-8 h-12 w-2/3" />
    <Skeleton className="mb-3 h-4 w-1/3" />
    <Skeleton className="mb-10 h-4 w-1/2" />
    <Skeleton className="mb-4 h-6 w-1/4" />
    <Skeleton className="mb-3 h-4 w-full" />
    <Skeleton className="mb-3 h-4 w-11/12" />
    <Skeleton className="mb-8 h-4 w-4/5" />
    <Skeleton className="mb-4 h-6 w-1/4" />
    <Skeleton className="h-32 w-full" />
  </div>
);

export default Skeleton;
