import { title } from "@/components/primitives";
import { Card, CardBody, Divider, Image, ScrollShadow } from "@nextui-org/react";

export default function AboutPage() {
  return (
    <>
		    <ScrollShadow className="w-[300px] h-[400px]">
      <Card>
        <CardBody>
          <div>
            <Image
              width={300}
              alt="NextUI hero Image"
              src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
            />
            <h1 className={title()}>About</h1>
          </div>
        </CardBody>
      </Card>
      <Divider className="my-4" />
			</ScrollShadow>
    </>
  );
}
