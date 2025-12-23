
import { NextRequest, NextResponse } from 'next/server';

// Assume the backend is running on this URL. Make this configurable.
const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:8000';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.json();
    console.log('Contact form submission received:', formData);

    // Transform frontend data to backend format
    const backendData = {
      name: `${formData.firstName} ${formData.lastName}`.trim(),
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      source: 'webform',
    };

    const backendResponse = await fetch(`${BACKEND_URL}/api/lead`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add any required auth headers for the backend
        // 'X-API-Key': process.env.BACKEND_API_KEY
      },
      body: JSON.stringify(backendData),
    });

    const responseData = await backendResponse.json();

    if (!backendResponse.ok) {
      console.error('Backend error:', responseData);
      return NextResponse.json(responseData, { status: backendResponse.status });
    }

    return NextResponse.json(responseData, { status: 201 });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json({ message: 'Error processing form' }, { status: 500 });
  }
}
