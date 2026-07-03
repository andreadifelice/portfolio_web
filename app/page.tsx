import { Gallery6 } from "@/components/ui/gallery6";
import Scroll from "@/components/ui/scroll-animation";
import { pageContainerClass } from "@/lib/utils";

export default function Page() {
  return (
    <>
      <Scroll />
      <div className={pageContainerClass}>
        <Gallery6 />
      </div>
    </>
  );
}