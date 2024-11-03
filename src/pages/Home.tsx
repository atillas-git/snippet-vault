import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-center">
        <div className="container flex items-center justify-between">
          <Link className="flex items-center justify-center" to="/">
            <MountainIcon className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <nav className="flex gap-4 sm:gap-6">
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              to="#features"
            >
              Features
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              to="#pricing"
            >
              Pricing
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              to="/login"
            >
              Login
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Create and Manage Document Templates with Ease
                </h1>
                <p className="mx-auto max-w-[700px] text-slate-500 md:text-xl">
                  Streamline your document creation process. Perfect for
                  businesses, freelancers, and organizations.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-slate-800 hover:bg-slate-700">
                  Get Started
                </Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-slate-100"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Key Features
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Customizable Templates</CardTitle>
                </CardHeader>
                <CardContent>
                  Create and customize document templates to fit your specific
                  needs.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Cloud Storage</CardTitle>
                </CardHeader>
                <CardContent>
                  Securely store and access your templates from anywhere,
                  anytime.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Collaboration Tools</CardTitle>
                </CardHeader>
                <CardContent>
                  Work together with your team in real-time on document
                  templates.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Version Control</CardTitle>
                </CardHeader>
                <CardContent>
                  Keep track of changes and revert to previous versions when
                  needed.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Export Options</CardTitle>
                </CardHeader>
                <CardContent>
                  Export your documents in various formats including PDF, Word,
                  and more.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>API Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  Integrate our service with your existing tools and workflows.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Pricing Plans
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Basic</CardTitle>
                  <CardDescription>
                    For individuals and small teams
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">$9.99/mo</p>
                  <ul className="mt-4 space-y-2">
                    <li>Up to 10 templates</li>
                    <li>1GB storage</li>
                    <li>Basic collaboration</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Choose Plan</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Pro</CardTitle>
                  <CardDescription>For growing businesses</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">$24.99/mo</p>
                  <ul className="mt-4 space-y-2">
                    <li>Unlimited templates</li>
                    <li>10GB storage</li>
                    <li>Advanced collaboration</li>
                    <li>Version history</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Choose Plan</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <CardDescription>For large organizations</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">Custom</p>
                  <ul className="mt-4 space-y-2">
                    <li>Unlimited everything</li>
                    <li>24/7 support</li>
                    <li>Custom integrations</li>
                    <li>Dedicated account manager</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Contact Sales</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section
          id="testimonials"
          className="w-full py-12 md:py-24 lg:py-32 bg-slate-100"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              What Our Customers Say
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="mt-4">
                  <p className="text-slate-500">
                    "This platform has revolutionized our document management
                    process. It's intuitive and powerful."
                  </p>
                  <p className="mt-2 font-semibold">
                    - Sarah J., Marketing Manager
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="mt-4">
                  <p className="text-slate-500">
                    "The collaboration features are top-notch. It's made our
                    team much more efficient."
                  </p>
                  <p className="mt-2 font-semibold">- Mike T., Project Lead</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="mt-4">
                  <p className="text-slate-500">
                    "As a freelancer, this tool has been a game-changer for
                    managing client documents."
                  </p>
                  <p className="mt-2 font-semibold">
                    - Emily R., Freelance Designer
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Ready to streamline your document workflow?
                </h2>
                <p className="mx-auto max-w-[600px] text-slate-500 md:text-xl">
                  Join thousands of satisfied users and start creating
                  professional documents with ease.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="flex-1"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button
                    className="bg-slate-800 hover:bg-slate-700"
                    type="submit"
                  >
                    Get Started
                  </Button>
                </form>
                <p className="text-xs text-slate-500">
                  By signing up, you agree to our{" "}
                  <Link className="underline underline-offset-2" to="/terms">
                    Terms & Conditions
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 px-4 md:px-6 border-t">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-slate-500">
            © 2024 Acme Inc. All rights reserved.
          </p>
          <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
            <Link
              className="text-xs hover:underline underline-offset-4"
              to="/terms"
            >
              Terms of Service
            </Link>
            <Link
              className="text-xs hover:underline underline-offset-4"
              to="/privacy"
            >
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}

function MountainIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
