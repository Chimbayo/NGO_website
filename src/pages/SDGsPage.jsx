import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import SDGs from '../components/SDGs'
import { Button } from '../components/ui/button'

const SDGsPage = () => {
  const navigate = useNavigate()

  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 py-6">
        <Button
          onClick={() => navigate('/about')}
          variant="ghost"
          className="mb-4 hover:bg-primary/10 text-primary font-semibold"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to About
        </Button>
      </div>
      <SDGs />
    </div>
  )
}

export default SDGsPage
