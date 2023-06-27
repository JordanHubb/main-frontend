import { mount } from '@vue/test-utils'
import PartylistCreateForm from '@/components/PartylistCreateForm'

describe('Testing PartylistCreateForm.vue', () => {
    it('should not show form by default', () => {

        const wrapper = mount(PartylistCreateForm)


        expect(wrapper.find('#partylist-create-offcanvas').classes()).not.toContain('show')
    })
})
