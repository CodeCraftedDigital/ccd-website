import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Star, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

const reviews = [
  {
    name: "Julie Wilson",
    review:
      "Andrew did a fantastic job updating our company's website. His knowledge and professionalism are top notch. He has gone above and beyond to ensure we are happy.",
  },
  {
    name: "Jacob Hoyt",
    review:
      "From start to finish, their team was professional, responsive, and incredibly knowledgeable. The quality of their work is top-notch, and their attention to detail is impressive.",
  },
  {
    name: "Amber Thomas",
    review:
      "Andrew is amazing! He custom built a new website for our business giving us a more modern look. He is always available to answer questions and help me on the stuff that is super techy!",
  },
  {
    name: "Andrea Schrank",
    review:
      "Andrew has been a lifesaver in many situations. He is always courteous and full of great tips and ideas on improving our websites. We would not use anyone else.",
  },
  {
    name: "Chad Purcell",
    review:
      "Andrew calmly guided us through getting our website up and going again and did an outstanding job along the way. He was there at any time day or night and even responded over the weekend.",
  },
  {
    name: "Larry Hanson",
    review:
      "A.J. has been an incredible help guiding us with setting up what I'm told is a kick ass website! His knowledge and creativity have given us the utmost confidence in him and his business.",
  },
];

export function ReviewsSection() {
  return (
    <section className='py-16 md:py-24 bg-card/30'>
      <Container>
        <FadeIn className='text-center mb-12'>
          <Badge
            variant='outline'
            className='mb-6 px-4 py-2 bg-primary/10 border-primary/20 text-primary'
          >
            <Star className='w-4 h-4 fill-primary mr-2' />
            41 Five-Star Reviews on Google
          </Badge>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4'>
            What Our Clients Say
          </h2>
        </FadeIn>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10'>
          {reviews.map((review, index) => (
            <FadeIn key={review.name} delay={index * 0.1}>
              <Card className='flex flex-col h-full hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5'>
                <CardHeader>
                  <div className='flex gap-1 mb-3'>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className='w-4 h-4 fill-primary text-primary'
                      />
                    ))}
                  </div>
                  <CardDescription className='text-base leading-relaxed text-gray-300'>
                    "{review.review}"
                  </CardDescription>
                </CardHeader>
                <CardContent className='mt-auto'>
                  <p className='font-semibold text-white'>{review.name}</p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.6} className='text-center'>
          <Button asChild size='lg' variant='outline' className='group'>
            <a
              href='https://search.google.com/local/reviews?placeid=ChIJS9it2PlmI4gRDS-pkTQ9avE'
              target='_blank'
              rel='noopener noreferrer'
            >
              Read All Reviews
              <ArrowRight className='ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform' />
            </a>
          </Button>
        </FadeIn>
      </Container>
    </section>
  );
}
