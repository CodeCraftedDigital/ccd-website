import Container from "@/components/layout/Container";
import { Award, Users, TrendingUp, Clock } from "lucide-react";
import { AnimatedCounter } from "./AnimatedCounter";

const stats = [
  { icon: Award, value: 150, suffix: "+", label: "Projects Delivered" },
  { icon: Users, value: 98, suffix: "%", label: "Client Satisfaction" },
  { icon: TrendingUp, value: 41, suffix: "", label: "Five-Star Reviews" },
  { icon: Clock, value: 10, suffix: "+", label: "Years Experience" },
];

export function StatsSection() {
  return (
    <section className='py-16 md:py-20 border-y border-white/5 bg-card/30'>
      <Container>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className='text-center'>
                <div className='inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4'>
                  <IconComponent className='w-6 h-6 text-primary' />
                </div>
                <div className='text-4xl md:text-5xl font-bold text-white mb-2'>
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className='text-sm text-gray-400'>{stat.label}</div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
