import { useContext } from "react";
import { AuthContext } from "@/App";

type Props = {
  htmlFor: string;
};

export default function HamburgerButton({ htmlFor }: Props) {
  const { isSignedIn } = useContext(AuthContext)

  if (!isSignedIn) return null

  return (
    <label 
      htmlFor={htmlFor}
      className="btn btn-square btn-ghost"
      >
        ☰          
     </label>
  )
}