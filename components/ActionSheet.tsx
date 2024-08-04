import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetItem,
  Button,
  ButtonText,
} from "@gluestack-ui/themed";
import React from "react";
import { StyleSheet } from "react-native";
import ProductHeader from "./header/product/ProductHeader";
interface ActionSheetProps {
  button: React.ReactNode;
  body: React.ReactNode[];
}
const ActionSheet = ({ button, body }: ActionSheetProps) => {
  const [showActionsheet, setShowActionsheet] = React.useState(false);
  const handleClose = () => setShowActionsheet(false);
  return (
    <>
      <Button style={{
        backgroundColor: 'transparent'
      }} onPress={() => setShowActionsheet(true)}>{button}</Button>
      <Actionsheet isOpen={showActionsheet} onClose={handleClose}>
        <ActionsheetBackdrop />
        <ActionsheetContent>
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>
          {body.map((t, index) => (
            <ActionsheetItem key={index}>{t}</ActionsheetItem>
          ))}
        </ActionsheetContent>
      </Actionsheet>
    </>
  );
};

export default ActionSheet;

const styles = StyleSheet.create({
  container: {},
});
