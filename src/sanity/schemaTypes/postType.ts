import {defineType, defineField} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }
      ]
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {type: 'block'},
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            },
          ],
        },
        {
          type: 'object',
          name: 'imageWithText',
          title: 'Image with Text',
          fields: [
            {
              name: 'heading',
              title: 'Heading',
              type: 'string',
              description: 'Optional section heading shown above the text.',
            },
            {
              name: 'text',
              title: 'Text',
              type: 'array',
              of: [
                {
                  type: 'block',
                  styles: [{ title: 'Normal', value: 'normal' }],
                  lists: [],
                  marks: {
                    decorators: [
                      { title: 'Bold', value: 'strong' },
                      { title: 'Italic', value: 'em' },
                    ],
                    annotations: [
                      {
                        name: 'link',
                        type: 'object',
                        title: 'Link',
                        fields: [
                          {
                            name: 'href',
                            type: 'url',
                            title: 'URL',
                            validation: (rule: any) =>
                              rule.uri({ scheme: ['http', 'https', 'mailto'] }),
                          },
                          {
                            name: 'blank',
                            type: 'boolean',
                            title: 'Open in new tab',
                            initialValue: true,
                          },
                        ],
                      },
                    ],
                  },
                },
              ],
            },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: { hotspot: true },
              fields: [
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Alternative text',
                },
              ],
            },
            {
              name: 'imagePosition',
              title: 'Image Position',
              type: 'string',
              initialValue: 'right',
              options: {
                list: [
                  { title: 'Right (text left, image right)', value: 'right' },
                  { title: 'Left (image left, text right)', value: 'left' },
                ],
                layout: 'radio',
              },
            },
          ],
          preview: {
            select: {
              title: 'heading',
              media: 'image',
            },
            prepare({ title, media }: any) {
              return {
                title: title || 'Image with Text',
                media,
              }
            },
          },
        },
      ],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'faqs',
      title: 'Frequently Asked Questions',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'FAQ Item',
          fields: [
            { name: 'question', type: 'string', title: 'Question' },
            {
              name: 'answer',
              title: 'Answer',
              description: 'Supports bold, italic, and hyperlinks.',
              type: 'array',
              of: [
                {
                  type: 'block',
                  styles: [{ title: 'Normal', value: 'normal' }],
                  lists: [],
                  marks: {
                    decorators: [
                      { title: 'Bold', value: 'strong' },
                      { title: 'Italic', value: 'em' },
                    ],
                    annotations: [
                      {
                        name: 'link',
                        type: 'object',
                        title: 'Link',
                        fields: [
                          {
                            name: 'href',
                            type: 'url',
                            title: 'URL',
                            validation: (rule: any) =>
                              rule.uri({ scheme: ['http', 'https', 'mailto'] }),
                          },
                          {
                            name: 'blank',
                            type: 'boolean',
                            title: 'Open in new tab',
                            initialValue: true,
                          },
                        ],
                      },
                    ],
                  },
                },
              ],
            },
          ],
          preview: {
            select: { title: 'question' },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'thumbnail',
    },
  },
})
