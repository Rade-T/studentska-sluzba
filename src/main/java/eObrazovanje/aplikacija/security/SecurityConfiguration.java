package eObrazovanje.aplikacija.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true) // da bi anotacije @PreAuthorize nad metodama radile
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
	@Autowired
	private UserDetailsService userDetailsService;

	@Autowired
	public void configureAuthentication(
			AuthenticationManagerBuilder authenticationManagerBuilder)
			throws Exception {
		
		authenticationManagerBuilder
				.userDetailsService(this.userDetailsService).passwordEncoder(
						passwordEncoder());
	}

	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	@Bean
	@Override
	public AuthenticationManager authenticationManagerBean() throws Exception {
		return super.authenticationManagerBean();
	}
	
	@Bean
	public AuthenticationTokenFilter authenticationTokenFilterBean()
			throws Exception {
		AuthenticationTokenFilter authenticationTokenFilter = new AuthenticationTokenFilter();
		authenticationTokenFilter
				.setAuthenticationManager(authenticationManagerBean());
		return authenticationTokenFilter;
	}

	@Override
	protected void configure(HttpSecurity httpSecurity) throws Exception {
		httpSecurity
			.csrf().disable()
			.sessionManagement()
				.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
				.and()
			.authorizeRequests() // bez logovanja dostupni samo servisi login
				.antMatchers("/api/login").permitAll()
				.antMatchers(HttpMethod.GET, "/api/**").authenticated()
				.antMatchers(HttpMethod.POST, "/api/*").authenticated()
				.antMatchers(HttpMethod.DELETE, "/api/*").authenticated()
				.antMatchers(HttpMethod.PUT, "/api/*").authenticated()
//				.antMatchers(HttpMethod.GET, "/api/**").permitAll()
//				.antMatchers(HttpMethod.POST, "/api/**").permitAll()
//				.antMatchers(HttpMethod.PUT, "/api/**").permitAll()
//				.antMatchers(HttpMethod.DELETE, "/api/**").permitAll()
				.antMatchers("/*").permitAll();
				//.anyRequest().authenticated(); // za ostale akcije se mora biti ulogovan
				
		// pre standardnog Spring filtera, postavlja se nas filter za postavljanje korisnika na osnovu 
		// JWT tokena u zahtevu
		httpSecurity.addFilterBefore(authenticationTokenFilterBean(),
				UsernamePasswordAuthenticationFilter.class);
	}
}
