import { NextResponse, NextRequest } from "next/server";
import { Resend } from "resend";
import EmailTemplate from "@/components/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req){
   const data = await req.json()
   
   try {
    const answer = await resend.emails.send({
        from: data.email + ' <onboarding@resend.dev>',
        to: ['lsneyder99@gmail.com'],
        subject: data.message,
        react: EmailTemplate,
    })
    return NextResponse.json( { data: answer }, { status: 200 })
   } catch (error) {
    console.log(error);
   }
}
