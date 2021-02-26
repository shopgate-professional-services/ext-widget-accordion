import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import { themeConfig } from '@shopgate/engage';
import { Accordion, HtmlSanitizer } from '@shopgate/engage/components';
import { styles as configStyles } from '../../config';

const styles = {
  accordion: css({
    paddingTop: themeConfig.variables.gap.small,
    background: themeConfig.colors.light,
  }, configStyles.accordion).toString(),
  header: css({
    marginBottom: themeConfig.variables.gap.small,
    ' > div[role=button]': {
      background: themeConfig.colors.shade8,
      fontWeight: 600,
      ...configStyles.header,
    },
  }, configStyles.headerToggle).toString(),
  labelCollapsed: css(configStyles.labelCollapsed).toString(),
  labelExpanded: css(configStyles.labelExpanded).toString(),
  content: css({
    paddingTop: themeConfig.variables.gap.bigger,
  }, configStyles.content).toString(),
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
    <div className={styles.accordion}>
      {accordion.map(panel => (
        <div className={styles.header} key={panel.labelCollapsed}>
          <Accordion
            renderLabel={({ open }) => (
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
