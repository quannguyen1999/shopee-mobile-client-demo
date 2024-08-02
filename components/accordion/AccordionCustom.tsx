import { BG_SLATE_200 } from "@/constants/colors";
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionTrigger,
  Divider,
} from "@gluestack-ui/themed";

interface NotificaitonAccordionItemProps {
  parent: React.ReactNode;
  child: React.ReactNode;
}

interface NotificaitonAccordionProps {
  datas: NotificaitonAccordionItemProps[];
}

const AccordionCustom = ({ datas }: NotificaitonAccordionProps) => {
  return (
    <Accordion
      size="md"
      variant="filled"
      type="single"
      isCollapsible={true}
      isDisabled={false}>
      {datas.map((t: any, index) => (
        <AccordionItem key={t.id} value={t.id}>
          <AccordionHeader>
            <AccordionTrigger>
              {({ isExpanded }) => {
                return <>{t.parent}</>;
              }}
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent
            style={{
              backgroundColor: BG_SLATE_200,
              paddingLeft: 40,
            }}>
            {t.child}
          </AccordionContent>
        </AccordionItem>
      ))}
      <Divider />
    </Accordion>
  );
};

export default AccordionCustom;
