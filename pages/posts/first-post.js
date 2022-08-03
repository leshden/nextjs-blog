import Link from 'next/link';
import Image from 'next/image';

const FirstPost = () => {
  return (
    <>
      <h1>First Post</h1>
      <Image
        src="/images/profile.jpg" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        alt="Your Name"
      />
      <h2>
        <Link href='/'>
          <a> back to Home</a>
        </Link>
      </h2>
    </>
  );
}

export default FirstPost;
