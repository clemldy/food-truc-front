import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  name:          DS.attr('string'),
  facility_type: DS.attr('string'),
  status:        DS.attr('string'),
  food_items:    DS.attr('string'),
  address:       DS.attr('string')
});
