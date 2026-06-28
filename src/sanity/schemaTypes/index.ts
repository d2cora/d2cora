import { type SchemaTypeDefinition } from 'sanity'

import {postType} from './postType'
import {testimonialType} from './testimonialType'
import {faqType} from './faqType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [postType, testimonialType, faqType],
}
