import { Poster, Row } from "@/components/Poster";

export function Education() {
  return (
    <Row title="Formation & certifications">
      <Poster
        title="Licence SI"
        subtitle="ESPIN Sfax · 2023"
        image="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80"
      />
      <Poster
        title="Python"
        subtitle="Cisco Essentials 1"
        image="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80"
      />
      <Poster
        title="Linux"
        subtitle="NDG Unhatched · Cisco"
        image="https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=800&q=80"
      />
      <Poster
        title="Web"
        subtitle="HTML & CSS · OpenClassrooms"
        image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
      />
      <Poster
        title="IA & santé"
        subtitle="JETAIM’3"
        image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80"
      />
    </Row>
  );
}
