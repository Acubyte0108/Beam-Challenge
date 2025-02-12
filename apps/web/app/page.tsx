import { Button } from "@workspace/ui/components/button"
import { BeamButton } from "@workspace/ui/components/beam-components/index"
import BeamLogo from "@workspace/ui/components/icons/beam"

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello World</h1>
        <p className="text-lg">Real Project</p>
        <Button size="sm">Button</Button>
        <BeamButton>Beam Button</BeamButton>
        <BeamLogo />
      </div>
    </div>
  )
}
