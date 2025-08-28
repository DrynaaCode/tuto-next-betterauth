import { NextResponse } from "next/server"
import { getSession } from "@/lib/server-session"

export async function GET() {
  const session = await getSession()
  if (!session?.user) {
    return NextResponse.json({ user: null }, { status: 401 })
  }
  // Ne retourne que les infos publiques
  const { name, email, image } = session.user
  return NextResponse.json({ user: { name, email, avatar: image } })
}
