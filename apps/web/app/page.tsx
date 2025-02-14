import { Button } from "@workspace/ui/components/button"
import { BeamButton } from "@workspace/ui/components/beam-components/button"
import { BeamLogoLight } from "@workspace/ui/components/beam-components/icons"

export default function Page() {
  return (
      <div className="flex flex-col items-center justify-center gap-4 min-h-svh">
        <h1 className="text-2xl font-bold">Hello World</h1>
        <p className="text-lg">Real Project</p>
        <Button size="sm">Button</Button>
        <BeamButton variantType="outline">Beam Button</BeamButton>
        <BeamLogoLight />
      </div>
  )
}
