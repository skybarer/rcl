#!/bin/bash
# Creates boilerplate component for React Component
#https://daveceddia.com/react-cli-with-bash/
#https://gist.github.com/GoodMattwin/eba19a6ec4fb2626e708e91aa534f9f2
#https://react-bootstrap.github.io/components/alerts/

# this should not be run multiple times otherwise files will be overridden

#COMPONENT_PATH="C:\\Users\\inkol\\code\\react\\rcl\\src\\components\\"

COMPONENT_ARRAY=(
  Divider
)

for COMPONENT in ${COMPONENT_ARRAY[@]}; do

  COMPONENT_PATH="C:\\Users\\inkol\\Desktop\\code\\rcl\\src\\atoms\\"
#####################index component data ##################
INDEX_JS_CONTENT="import $COMPONENT from './$COMPONENT';

export {
    $COMPONENT
};"

####################story component data ###################
STORIES_CONTENT="import React from 'react';
import $COMPONENT from './$COMPONENT';

export default {
  title: 'atoms/$COMPONENT',
  component: $COMPONENT
};

export const Template = (args) => <$COMPONENT {...args} />;

const Basic = Template.bind({});

Basic.parameters = {
  layout: 'fullscreen'
};

Basic.args = {};"
####################Root component data###################
COMPONENT_CONTENT="import React from 'react';
import PropTypes from 'prop-types';
import './$COMPONENT.css';

const $COMPONENT = (props) => {
  return (
    <>
      <h1> New $COMPONENT Component </h1>
    </>
  );
}

$COMPONENT.propTypes = {
  props: PropTypes.object
};
$COMPONENT.defaultProps = {};

export default $COMPONENT;"
##################################################
####### file creation and template insertion #####
  echo "Component Name : $COMPONENT"
  echo "$COMPONENT_PATH$COMPONENT"
  cd $COMPONENT_PATH
  mkdir $COMPONENT
  cd "$COMPONENT_PATH$COMPONENT"
  touch $COMPONENT.js
  touch $COMPONENT.stories.js
  touch index.js
  touch $COMPONENT.css
  echo "$COMPONENT_CONTENT" >>$COMPONENT.js
  echo "$STORIES_CONTENT" >>$COMPONENT.stories.js
  echo "$INDEX_JS_CONTENT" >>index.js
##################################################
done

sleep 5s # Waits 5 seconds.
