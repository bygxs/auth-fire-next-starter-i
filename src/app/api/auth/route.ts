import { NextResponse } from 'next/server';
import { auth } from '../../../lib/firebase'; // Use the initialized auth instance
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

export async function POST(req: Request) {
  const { email, password } = await req.json();

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password); // Use imported auth
    const token = await userCredential.user.getIdToken();

    return NextResponse.json({ token }); // Return the token for the client
  } catch (error) {
    console.error('Login error:', (error as any).message); // Log error for debugging
    return NextResponse.json({ error: (error as any).message }, { status: 401 }); // Handle error response
  }
}

export async function DELETE() {
  try {
    await signOut(auth); // Use imported auth
    return NextResponse.json({ message: 'Logged out successfully' });
  } catch (error) {
    console.error('Logout error:', (error as any).message); // Log error for debugging
    return NextResponse.json({ error: (error as any).message }, { status: 500 }); // Handle logout error
  }
}
