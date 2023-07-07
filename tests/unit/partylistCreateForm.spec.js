import { mount } from '@vue/test-utils'
import PartylistCreateForm from '@/components/PartylistCreateForm'

describe('Testing PartylistCreateForm.vue', () => {
    it('should not show form by default', () => {
        // when
        const wrapper = mount(PartylistCreateForm)

        // then
        expect(wrapper.find('#partylist-create-offcanvas').classes()).not.toContain('show')
    })
})
