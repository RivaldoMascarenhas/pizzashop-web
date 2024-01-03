import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

const singInForm = z.object({
  email: z.string().email(),
})
type SingInForm = z.infer<typeof singInForm>

export function SingIn() {
  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm<SingInForm>()

  async function handleSignIn(data: SingInForm) {
    console.log(data.email)
    await new Promise((resolve) => {
      setTimeout(resolve, 2000)
    })
    toast.success('Enviamos um link de autenticação para seu e-mail.', {
      action: {
        label: 'Reenviar',
        onClick: () => handleSignIn(data),
      },
    })
  }

  return (
    <>
      <Helmet title="Login" />
      <div className="p-8 space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Acessar painel
          </h1>
          <p className=" text-sm text-muted-foreground">
            Acompanhe suas vendas pelo painel do parceiro!
          </p>
        </div>
        <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Seu e-mail</Label>
            <Input id="email" type="email" {...register('email')} />
          </div>
          <Button className="w-full" type="submit" disabled={isSubmitting}>
            Acessar painel
          </Button>
        </form>
      </div>
    </>
  )
}
