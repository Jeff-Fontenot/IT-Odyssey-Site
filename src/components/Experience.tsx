export default function Experience() {
  return (
    <section className="py-20 bg-slate-950">
      <div className="flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Professional{' '}
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
            Building expertise in enterprise cloud infrastructure and hybrid environments
          </p>
        </div>

        {/* Experience Card with Golden Glow */}
        <div className="w-full max-w-4xl relative">
          {/* Golden glow effect - outside the container */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/30 via-orange-400/30 to-yellow-400/30 blur-2xl"></div>
          
          <div className="glass-container p-8 rounded-2xl relative z-10">
            
            {/* Job Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Enterprise Service Desk Analyst
                </h3>
                <p className="text-lg text-yellow-400 mb-1">
                  Leidos via TEKSystems | Marine Corps Enterprise Support
                </p>
                <p className="text-white/70">Jan 2025 – Present</p>
              </div>
            </div>

            {/* Security Clearance */}
            <div>
              <p className="text-lg text-yellow-400 mb-1">
                  Active Secret Security Clearance
                </p>
            </div>

            {/* Environment */}
            <div className="mb-6 mt-4 pt-4 border-t border-white/20">
              <p className="text-white/80">
                <span className="font-semibold text-yellow-400">Environment:</span> Hybrid Microsoft Enterprise – Active Directory, Azure AD, Exchange Online, O365, Intune
              </p>
            </div>

            {/* Key Responsibilities */}
            <div className="space-y-4 text-white/90">
              <div>
                <span className="font-semibold text-yellow-400">• Incident Management & Troubleshooting:</span> Handle 20–30 enterprise support calls daily via Cisco Finesse, conducting root cause analysis and detailed documentation in Remedy with complete audit trails
              </div>
              
              <div>
                <span className="font-semibold text-yellow-400">• Identity & Access Management:</span> Manage user lifecycle and access provisioning using ADAC, ADUC, and Entra ID, including group membership validation, role assignments, and cross-forest authentication issues
              </div>
              
              <div>
                <span className="font-semibold text-yellow-400">• Hybrid Cloud Operations:</span> Troubleshoot Exchange hybrid configurations, validating SMTP proxy/target addresses, ECP redirection, and Azure AD Connect sync issues
              </div>
              
              <div>
                <span className="font-semibold text-yellow-400">• Privileged Access Management:</span> Use Azure PIM daily for just-in-time elevation to manage O365, Exchange, and Azure AD roles
              </div>
              
              <div>
                <span className="font-semibold text-yellow-400">• License & Service Management:</span> Resolve GAL mismatches and distribution list visibility problems; validate O365 licensing and service entitlements based on security group memberships
              </div>
              
              <div>
                <span className="font-semibold text-yellow-400">• Infrastructure Support:</span> Perform network diagnostics (IP conflict, proxy/PAC config, domain trust failures), certificate checks for CAC logins, and Outlook optimization/cache resets
              </div>
              
              <div>
                <span className="font-semibold text-yellow-400">• Mobile Device Management:</span> Use Intune for device inventory, IMEI lookup, and basic configuration management of mobile assets
              </div>
              
              <div>
                <span className="font-semibold text-yellow-400">• Security Compliance:</span> Review SAAR forms and DoD training certificates to validate account requests and enforce role-based access controls
              </div>
              
              <div>
                <span className="font-semibold text-yellow-400">• Process Automation:</span> Developed menu-based PowerShell tool for User, Workstation, and Printer lookup for call documentation automation: improving queries from 3-4 minutes to several seconds per service call
              </div>
              
              <div>
                <span className="font-semibold text-yellow-400">• Professional Development:</span> Pursuing certifications in Azure (AZ-104), AWS (Solutions Architect, SysOps, Developer), and CCSP to transition into DevOps and cloud engineering roles
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}