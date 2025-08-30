import ComingSoon from "@/components/ComingSoon";

export const metadata = {
  title: "Blog — Coming Soon",
  robots: { index: false, follow: false },
};

export default function BlogPage() {
  return (
    <ComingSoon
      title="Blog"
      blurb="Long-form posts, show notes, and tutorials—shipping soon."
    />
  );
}
