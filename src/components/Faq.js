import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTranslation } from "react-i18next";

export default function Faq() {
  const { t } = useTranslation();

  return (
    <div id="faq" className="faq-section">
      <div className="container">
        <p className="line"></p>
        <div className="faq-div">
          <div className="faq">
            <h1>{t("FAQ")}</h1>
          </div>
          <div className="faq-accordion">
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <h4>{t("washingDuration")}</h4>
              </AccordionSummary>
              <AccordionDetails>
                <p>{t("washingDurationAnswer")}</p>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <h4>{t("pricing")}</h4>
              </AccordionSummary>
              <AccordionDetails>
                <p>{t("pricingAnswer")}</p>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
              >
                <h4>{t("damageGuarantee")}</h4>
              </AccordionSummary>
              <AccordionDetails>
                <p>{t("damageGuaranteeAnswer")}</p>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4a-content"
                id="panel4a-header"
              >
                <h4>{t("cleaningProducts")}</h4>
              </AccordionSummary>
              <AccordionDetails>
                <p>{t("cleaningProductsAnswer")}</p>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel5a-content"
                id="panel5a-header"
              >
                <h4>{t("pickupDelivery")}</h4>
              </AccordionSummary>
              <AccordionDetails>
                <p>{t("pickupDeliveryAnswer")}</p>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel6a-content"
                id="panel6a-header"
              >
                <h4>{t("washAnyCarpet")}</h4>
              </AccordionSummary>
              <AccordionDetails>
                <p>{t("washAnyCarpetAnswer")}</p>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
