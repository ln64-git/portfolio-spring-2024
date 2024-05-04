import { BackgroundGradient } from "@/components/background-gradient";
import { title } from "@/components/primitives";
import {
  Card,
  CardBody,
  Divider,
  Image,
  ScrollShadow,
} from "@nextui-org/react";

export default function AboutPage() {
  return (
    <div className="w-full flex flex-col justify-center ">
      <div className="max-w-lg mx-auto">
        <BackgroundGradient>
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
        </BackgroundGradient>
      </div>

      {/* <Divider className="my-4" /> */}
    </div>
  );
}
