import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { FaGoogle } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import {z} from "zod";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/firebase";
import { useToast } from "@/hooks/use-toast";
import { useAuthStore } from "@/hooks/useAuthStore";
import {doc,setDoc} from "firebase/firestore";
import { User } from "@/dtos/user.dtos";

const registerSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
})
export default function Register() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [email, setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("");

  const setUser = useAuthStore((state)=>state.setUser);
  const navigate = useNavigate();
  
  const {toast} = useToast()

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);
    try {
        if(password !== confirmPassword){
            toast({
                title:"Error",
                description:"Passwords do not match",
                variant:"destructive"
            })
            return;
        }
        registerSchema.parse({
            email,
            password,
        })
        const userCredential = await createUserWithEmailAndPassword(auth,email,password)
        const user : User = {
            name:firstName + " " + lastName,
            uid: userCredential.user.uid,
            email: email,
            role: "user",
            createdAt: new Date(),
            updatedAt: new Date()
        }
        await setDoc(doc(db,"users",userCredential.user.uid),user)
        setUser(userCredential.user)
        toast({
            title:"Success",
            description:"User created successfully"
        })
        navigate("/app/dashboard")
    } catch (error:any) {
        if(error.message){
            toast({
                title:"Error",
                description:error.message,
                variant:"destructive"
            })
        }
        console.log(error)
    } finally{
        setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            Create an account
          </CardTitle>
          <CardDescription className="text-center">
            Enter your details below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Button
              variant="outline"
              type="button"
              disabled={isLoading}
              className="w-full"
            >
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <FaGoogle className="mr-2 h-4 w-4" />
              )}{" "}
              Register with Google
            </Button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-slate-300" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-slate-100 px-2 text-slate-600">
                Or continue with
              </span>
            </div>
          </div>
          <form onSubmit={onSubmit}>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input 
                    id="first-name" 
                    placeholder="John" 
                    required 
                    value={firstName}
                    onChange={(e)=>setFirstName(e.target.value)}
                    />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input 
                    id="last-name" 
                    placeholder="Doe" 
                    required 
                    value={lastName}
                    onChange={(e)=>setLastName(e.target.value)}
                    />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="m@example.com"
                  required
                  type="email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input 
                    id="password" 
                    required 
                    type="password" 
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input 
                    id="confirm-password" 
                    required 
                    type="password" 
                    onChange={(e)=>setConfirmPassword(e.target.value)}
                    />
              </div>
              <Button
                className="w-full bg-slate-800 hover:bg-slate-700"
                type="submit"
                disabled={isLoading}
              >
                {isLoading && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                Create Account
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <div className="text-sm text-slate-600 text-center w-full">
            Already have an account?{" "}
            <Link
              className="underline text-slate-800 hover:text-slate-700"
              to={"/login"}
            >
              Login
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
