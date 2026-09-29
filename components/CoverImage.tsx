import type { PostMeta } from "@/lib/posts";

/** Cover artwork for a post, used on the article hero and every post card.

    With the default imageFit ("cover") this is just the image, cropped to fill.
    With imageFit "contain" the image is shown whole and backed by a blurred,
    zoomed copy of itself, so the letterboxing blends into the artwork instead
    of sitting on the flat brand gradient. */
export default function CoverImage({ post, alt = "" }: { post: PostMeta; alt?: string }) {
  if (!post.image) return null;
  return (
    <>
      {post.imageFit === "contain" && (
        <img className="cover-blur" src={post.image} alt="" aria-hidden="true" />
      )}
      <img src={post.image} alt={alt} />
    </>
  );
}
