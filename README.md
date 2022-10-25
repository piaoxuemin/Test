# Test
/pangea_dental_app/app/views/users/shared/_profile_summary.html.erb
45~49
  <div class="py-5 break-words">
  <% if !user.userable.description.nil? %>
  <textarea class="text-gray-800 block text-md w-full focus:text-gray-700 focus:bg-white rounded focus:border-gray-700 transition ease-in-out focus:outline-none" name="user[designer][description]" id="user_designer_description" cols="40" rows="8" data-validate="true"><%= user.userable.description %></textarea>
  <% end %>
  </div>
    
    
/pangea_dental_app/app/assets/stylesheets/home.scss
304~306
.dropzone .dz-preview .dz-error-message {
    top: 150px!important;
}

    /pangea_dental_app/app/views/users/registrations/choose_user_type.html.erb
    31~35
        <div onclick="location.href='/user/checkprivacy';" >
          <%= link_to '', class: "border rounded border-gray-300 p-2 mt-3 block text-base font-medium leading-loose text-pangea-gray-text flex items-center hover:bg-pangea-blue hover:text-white hover:border-pangea-blue" do%>
            <i class="material-icons mr-2">check</i><p>Sign up as designer</p>
          <% end %>
        </div>
