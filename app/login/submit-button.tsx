"use client";

import { useFormStatus } from "react-dom";
import { type ComponentProps } from "react";
import { createClient } from "@/utils/supabase/client";
import { getURL } from "@/utils/url";

type Props = ComponentProps<"button"> & {
  pendingText?: string;
};

export function SubmitButton({ children, pendingText, ...props }: Props) {
  const { pending, action } = useFormStatus();
  const supabase = createClient();

  const isPending = pending && action === props.formAction;

  return (
    <>
      <button {...props} type="submit" aria-disabled={pending}>
        {isPending ? pendingText : children}
      </button>

      <button
        onClick={async () => {
          await supabase.auth.signInWithOAuth({
            provider: "github",
            options: {
              redirectTo: getURL() + "/auth/callback",
            },
          });
        }}
      >
        GIthub
      </button>
    </>
  );
}
