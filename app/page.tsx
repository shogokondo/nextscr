import Link from "next/link";
import { AuthButton } from "@/components/auth-button";
import { createClient } from "@/lib/supabase/server";
import { LogoutButton } from "@/components/logout-button";

export default async function Home() {

  const supabase = await createClient();

  // ユーザ情報の取得
  const { data } = await supabase.auth.getClaims();

  const user = data?.claims;

  return (
    <div>
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
          <div className="flex gap-5 items-center font-semibold">
            <Link href={"/"}>Next.js Supabase Starter</Link>
          </div>
            {user ? (
              <div className="flex items-center gap-4">
                Hey, {user.email}!
                <LogoutButton />
              </div>
            ) : (
              <div className="flex gap-2">
                <button>
                  <Link href="/auth/login">Sign in</Link>
                </button>
                <button>
                  <Link href="/auth/sign-up">Sign up</Link>
                </button>
              </div>
              )}
        </div>
      </nav>
      <h1>Welcome to the Home Page</h1>
    </div>
  );
}
