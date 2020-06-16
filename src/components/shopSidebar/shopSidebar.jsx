import React from "react";
import styles from "./shopSidebar.module.scss";
import {ReactComponent as ArrowDown } from "../../assets/icons/next.svg"
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
  } from "react-accessible-accordion";

const shopSidebar = props =>(
    <div className={styles.sidebar}>
        <Accordion allowZeroExpanded >
            <div className={styles.menuItem}>
        <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton style={{ outline: "none" }}>
                  <div className={styles.header}>
                    <span>Collections</span>
                    <ArrowDown/>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                  <div className={styles.panelContainer}>
                  <div className={styles.panel}>
                      <input type="checkbox"/>
                        <span>Men</span>
                  </div>
                  <div className={styles.panel}>
                      <input type="checkbox"/>
                        <span>Women</span>
                  </div>
                  <div className={styles.panel}>
                      <input type="checkbox"/>
                        <span>Kids</span>
                  </div>
                  </div>
                  
                  </AccordionItemPanel>
                  </AccordionItem>
        <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton style={{ outline: "none" }}>
                  <div className={styles.header}>
                    <span>Brands</span>
                    <ArrowDown/>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                  <div className={styles.panelContainer}>
                  <div className={styles.panel}>
                      <input type="checkbox"/>
                        <span>Adidas</span>
                  </div>
                  <div className={styles.panel}>
                      <input type="checkbox"/>
                        <span>Reebook</span>
                  </div>
                  <div className={styles.panel}>
                      <input type="checkbox"/>
                        <span>Timberland</span>
                  </div>
                  <div className={styles.panel}>
                      <input type="checkbox"/>
                        <span>Go sport</span>
                  </div>
                  <div className={styles.panel}>
                      <input type="checkbox"/>
                        <span>Levi's</span>
                  </div>
                  <div className={styles.panel}>
                      <input type="checkbox"/>
                        <span>Adidas</span>
                  </div>
                  <div className={styles.panel}>
                      <input type="checkbox"/>
                        <span>Reebook</span>
                  </div>
                  </div>
                  
                  </AccordionItemPanel>
                  </AccordionItem>
        <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton style={{ outline: "none" }}>
                  <div className={styles.header}>
                    <span>Categories</span>
                    <ArrowDown/>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                  <div className={styles.panelContainer}>
                  <div className={styles.panel}>
                      <input type="checkbox"/>
                        <span>New arrivals</span>
                  </div>
                  <div className={styles.panel}>
                      <input type="checkbox"/>
                        <span>Best Sellers</span>
                  </div>
                  <div className={styles.panel}>
                      <input type="checkbox"/>
                        <span>Clothes</span>
                  </div>
                  <div className={styles.panel}>
                      <input type="checkbox"/>
                        <span>Shoes</span>
                  </div>
                  <div className={styles.panel}>
                      <input type="checkbox"/>
                        <span>Accessories</span>
                  </div>
                  <div className={styles.panel}>
                      <input type="checkbox"/>
                        <span>Swimming</span>
                  </div>
                  </div>
                  
                  </AccordionItemPanel>
                  </AccordionItem>
        <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton style={{ outline: "none" }}>
                  <div className={styles.header}>
                    <span>Colors</span>
                    <ArrowDown/>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                  <div className={styles.panelContainer}>
                  <div className={styles.panel}>
                      <input type="checkbox"/>
                        <span>Red</span>
                  </div>
                  <div className={styles.panel}>
                      <input type="checkbox"/>
                        <span>Black</span>
                  </div>
                  <div className={styles.panel}>
                      <input type="checkbox"/>
                        <span>Blue</span>
                  </div>
                  <div className={styles.panel}>
                      <input type="checkbox"/>
                        <span>Gray</span>
                  </div>
                  <div className={styles.panel}>
                      <input type="checkbox"/>
                        <span>Orange</span>
                  </div>
                  <div className={styles.panel}>
                      <input type="checkbox"/>
                        <span>Yellow</span>
                  </div>
                  </div>
                  
                  </AccordionItemPanel>
                  </AccordionItem>
                  </div>
        </Accordion>
    </div>
)

export default shopSidebar