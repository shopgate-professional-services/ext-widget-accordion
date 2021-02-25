import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import { themeConfig } from '@shopgate/engage';
import { Accordion, HtmlSanitizer } from '@shopgate/engage/components';
import { styles as configStyles } from '../../config';

const styles = {
  accordionWrapper: css({
    background: themeConfig.colors.shade8,
    paddingTop: themeConfig.variables.gap.small,
  }, configStyles.accordionWrapper).toString(),
  accordion: css({
    marginBottom: themeConfig.variables.gap.small,
    background: themeConfig.colors.light,
  }, configStyles.accordion).toString(),
  labelCollapsed: css(configStyles.labelCollapsed).toString(),
  labelExpanded: css(configStyles.labelExpanded).toString(),
  content: css(configStyles.content).toString(),
};

/**
 * @returns {JSX}
 */
const AccordionWidget = ({ settings }) => {
  if (!settings) {
    return null;
  }

  const { accordion = [] } = settings;

  if (!accordion || !accordion.length) {
    return null;
  }

  return (
    <div className={styles.accordionWrapper}>
      {accordion.map(panel => (
        <div className={styles.accordion} key={panel.labelCollapsed}>
          <Accordion renderLabel={({ open }) => (
            <span className={open ? styles.labelExpanded : styles.labelCollapsed}>
              {open ? panel.labelExpanded : panel.labelCollapsed}
            </span>
          )}
          >
            <HtmlSanitizer className={styles.content}>
              {panel.content}
            </HtmlSanitizer>
          </Accordion>
        </div>
      ))}
    </div>
  );
};

AccordionWidget.propTypes = {
  settings: PropTypes.shape().isRequired,
};

export default AccordionWidget;
