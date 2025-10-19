import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server"; 
import MyCalendar1 from "./MyCalendar1";
import MyFullCalendar from "./MyFullCalendar";
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';




export default async function ProtectedPage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getClaims();
  if (error || !data?.claims) {
    redirect("/auth/login");
  }

  return (
    <div className="w-full h-[100%] flex flex-row">
      <div className="w-[300px]">
        <h1 className="text-3xl">Protected Page</h1>
        <div>このページは認証されたユーザーのみが見ることができます。</div>
      </div>
      {/* <div className="w-full">
        <div className="bg-accent text-sm p-3 px-5 rounded-md text-foreground flex gap-3 items-center">
          This is a protected page that you can only see as an authenticated
          user
        </div>
      </div>
      <div className="flex flex-col gap-2 items-start">
        <h2 className="font-bold text-2xl mb-4">Your user details</h2>
        <pre className="text-xs font-mono p-3 rounded border max-h-32 overflow-auto">
          {JSON.stringify(data.claims, null, 2)}
        </pre>
      </div> */}
      <div className="flex-1">
        <MyFullCalendar />
      </div>
      {/* <div>
        <h2 className="text-xl bg-red-200">this is react-calendar▼</h2>
        <MyCalendar1 />
      </div> */}
    </div>
  );
}
