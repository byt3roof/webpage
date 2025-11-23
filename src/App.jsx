import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />

      {/* Placeholder content to demonstrate layout */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Build faster with our platform
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            This is an example page content to show how the navbar sits at the top of your layout.
          </p>
        </div>
      </main>
    </div>
  );
}

export default App
