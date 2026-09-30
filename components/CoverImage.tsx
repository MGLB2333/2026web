import type { PostMeta } from "@/lib/posts";

/** Cover artwork for a post, used on the article hero and every post card.

    With the default imageFit ("cover") this is just the image, cropped to fill.
    With imageFit "contain" the image is shown whole, backed by a blurred zoomed
    copy of itself so the inset blends into the artwork — or by a flat imageBg
    colour, which suits artwork that already has its own solid background. */
export default function CoverImage({ post, alt = "" }: { post: PostMeta; alt?: string }) {
  if (!post.image) return null;
  return (
    <>
      {post.imageFit === "contain" &&
        (post.imageBg ? (
          <div className="cover-bg" style={{ background: post.imageBg }} />
        ) : (
          <img className="cover-blur" src={post.image} alt="" aria-hidden="true" />
        ))}
      <img src={post.image} alt={alt} />
    </>
  );
}
