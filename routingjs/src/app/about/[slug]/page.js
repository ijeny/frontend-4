// komponen ini akan menerima parameter dari URL melalui props 'params'
export default function BlogPostPage({ params }) {
  const { slug } = params; // slug akan bernilai 'nama-post' jika URL-nya adalah /blog/nama-post

  return (
    <div>
      <h1>Post Blog: {slug}</h1>
      <p>Konten detail untuk post dengan slug: {slug}</p>
    </div>
  );
}
