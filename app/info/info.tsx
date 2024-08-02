import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionIcon,
  AccordionItem,
  AccordionTitleText,
  AccordionTrigger,
  Divider,
} from "@gluestack-ui/themed";
import { Text, View } from "react-native";
import { Actionsheet } from "@gluestack-ui/themed";
import React from "react";
import ProductHeader from "@/components/header/product/ProductHeader";
import { AccordionContentText } from "@gluestack-ui/themed";
const Info = () => {
  return (
    <Accordion
      size="md"
      variant="filled"
      type="single"
      isCollapsible={true}
      isDisabled={false}>
      <AccordionItem value="a">
        <AccordionHeader>
          <AccordionTrigger>
            {({ isExpanded }) => {
              return (
                <>
                  <AccordionTitleText>
                    How do I place an order?
                  </AccordionTitleText>
                  {/* {isExpanded ? (
                      <AccordionIcon as={ChevronUpIcon} className="ml-3"/>
                    ) : (
                      <AccordionIcon as={ChevronDownIcon} className="ml-3"/>
                    )} */}
                </>
              );
            }}
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>
          <AccordionContentText>
            To place an order, simply select the products you want, proceed to
            checkout, provide shipping and payment information, and finalize
            your purchase.
          </AccordionContentText>
        </AccordionContent>
      </AccordionItem>
      <Divider />
    </Accordion>
  );
};

export default Info;
