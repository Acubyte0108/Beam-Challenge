export default function NotFound() {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-white text-black">
        <div className="text-center">
          <h1 className="md:text-4xl text-2xl font-bold">404 - Page Not Found</h1>
          <p className="mt-2 md:text-lg text-sm">Sorry, the page you are looking for does not exist.</p>
        </div>
      </div>
    );
  }