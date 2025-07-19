import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button.tsx';

export default function Header() {
  return (
    <header className="p-2 flex gap-2 bg-white text-black justify-between">
      <nav className="flex flex-row">
        <div className="px-2 font-bold">
          <Link to="/">Home</Link>
          <Button>
            <Link to="/about">About</Link>
          </Button>
        </div>
      </nav>
    </header>
  )
}
