import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FinalCTASection() {
  return (
    <Container className='py-16 md:py-24'>
      <div className='relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 via-primary/5 to-transparent border border-white/10 p-12 md:p-16 text-center'>
        <div
          className='absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2'
          aria-hidden='true'
        />
        <div className='relative z-10'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6'>
            Ready to Build Something Better?
          </h2>
          <p className='text-xl text-gray-300 mb-10 max-w-2xl mx-auto'>
            Let's discuss how Code Crafted Digital can engineer solutions that
            drive real results for your Michigan business.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button asChild size='lg' className='text-lg px-8 py-6 group'>
              <Link href='/contact'>
                Get A Quote
                <ArrowRight className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform' />
              </Link>
            </Button>
            <Button
              asChild
              variant='outline'
              size='lg'
              className='text-lg px-8 py-6'
            >
              <a href='https://fantastical.app/andrewnichols/code-crafted-digital'>
                Book A Call
              </a>
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
