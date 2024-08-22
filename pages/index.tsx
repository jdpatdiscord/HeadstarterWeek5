import Link from 'next/link';
import { Pinecone } from '@pinecone-database/pinecone';

import NavBar from '../components/navbar';

export default function Home() {
  const pc = new Pinecone({ apiKey: '2410d519-630c-4d87-ad89-402277d7d27f' });
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Rate My Professor</h1>
      <p className="text-lg mb-4">Find and rate your professors with ease.</p>
      <Link href="/search" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
        Seach Professors
      </Link>
      <Link href="/login" className="mt-4 bg-gray-800 text-white px-4 py-2 rounded-lg">
        Login
      </Link>
    </div>
  );
}