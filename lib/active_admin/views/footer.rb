module ActiveAdmin
  module Views
    class Footer < Component

      def build
        super :id => "footer"
        # powered_by_message
        para link_to("AppFellas", "http://appfellas.nl/", target: :_blank)
      end

      private

      def powered_by_message
        para "Appfellas CMS. " + I18n.t('active_admin.powered_by',
          :active_admin =>  link_to("Active Admin", "http://www.activeadmin.info"),
          :version => ActiveAdmin::VERSION).html_safe
      end

    end
  end
end
